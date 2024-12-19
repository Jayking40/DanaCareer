
import React, { useEffect, useState } from "react";
import { Layout, Menu, Table, Card, Typography, Space, Spin, Alert } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  PlusOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const baseUrl = 'https://danacareeerapi.onrender.com';
const HRDashboard = () => {
  const [jobData, setJobData] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobData = async () => {
    try {
      const response = await fetch(`${baseUrl}/jobs/getAllJobs`);
      if (!response.ok) throw new Error("Failed to fetch job listings");
      const data = await response.json();
      setJobData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingJobs(false);
    }
  };

  const fetchApplicationData = async () => {
    try {
      const response = await fetch(`${baseUrl}/job-applications/getAllApplication`);
      if (!response.ok) throw new Error("Failed to fetch applications");
      const data = await response.json();
      setApplicationData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingApplications(false);
    }
  };

  useEffect(() => {
    fetchJobData();
    fetchApplicationData();
  }, []);

  const jobColumns = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Application Deadline",
      dataIndex: "applicationDeadline",
      key: "applicationDeadline",
    },
  ];

  const applicationColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Applied At",
      dataIndex: "appliedAt",
      key: "appliedAt",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ height: 64, background: "#001529", margin: "16px" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}><Link to="/hr-analytics">Hr Analytics</Link></Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}><Link to="/report">Hr Report</Link></Menu.Item>
          <Menu.Item key="4" icon={<PlusOutlined />}>
            <Link to="/job-creation">Create Job</Link>  {/* This links to the create job page */}
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}><Link to="/excel">Manage Excel Sheet</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Title level={3} style={{ margin: "16px" }}>
            HR Dashboard
          </Title>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            {/* Job Listings */}
            {loadingJobs ? (
              <Spin size="large" />
            ) : error ? (
              <Alert message={error} type="error" />
            ) : (
              <Card title="Job Listings" bordered={false}>
                <Table columns={jobColumns} dataSource={jobData} />
              </Card>
            )}

            {/* Job Applications */}
            {loadingApplications ? (
              <Spin size="large" />
            ) : error ? (
              <Alert message={error} type="error" />
            ) : (
              <Card title="Job Applications" bordered={false}>
                <Table columns={applicationColumns} dataSource={applicationData} />
              </Card>
            )}
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HRDashboard;
