import React, { useEffect, useState } from "react";
import { Layout, Menu, Table, Card, Typography, Space, Spin, Alert, Select } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  PlusOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const baseUrl = "https://danacareeerapi.onrender.com";

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

  const updateApplicationStatus = async (id, status) => {
    try {
      const response = await fetch(`${baseUrl}/job-applications/updateStatus/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error("Failed to update application status");
      fetchApplicationData(); // Refresh the table after status update
    } catch (err) {
      setError(err.message);
    }
  };

  // const toggleJobStatus = async (id) => {
  //   try {
  //     const response = await fetch(`${baseUrl}/jobs/toggleIsOpen/${id}`, {
  //       method: "PATCH",
  //     });
  //     if (!response.ok) throw new Error("Failed to toggle job status");
  //     fetchJobData(); // Refresh the table after status update
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleToggleJobStatus = async (id, isOpen) => {
    try {
      // Optimistically update the local state
      setJobData((prevJobs) =>
        prevJobs.map((job) =>
          job.id === id ? { ...job, isOpen } : job
        )
      );
  
      const response = await fetch(`${baseUrl}/jobs/toggleIsOpen/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isOpen }),
      });
      if (!response.ok) throw new Error("Failed to toggle job status");
    } catch (err) {
      setError(err.message);
  
      // Optionally revert optimistic update
      setJobData((prevJobs) =>
        prevJobs.map((job) =>
          job.id === id ? { ...job, isOpen: !isOpen } : job
        )
      );
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
    {
      title: "Status",
      key: "status",
      render: (record) => (
        <Select
          defaultValue={record.isOpen ? "OPEN" : "CLOSED"}
          style={{ width: 120 }}
          onChange={(value) => handleToggleJobStatus(record.id, value === "OPEN")}
        >
          <Option value="OPEN">Open</Option>
          <Option value="CLOSED">Closed</Option>
        </Select>
      ),
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
    {
      title: "Status",
      key: "status",
      render: (record) => (
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          onChange={(value) => updateApplicationStatus(record.id, value)}
        >
          <Option value="NEW">New</Option>
          <Option value="SHORTLISTED">Shortlisted</Option>
          <Option value="REJECTED">Rejected</Option>
          <Option value="ACCEPTED">Accepted</Option>
          <Option value="PENDING">Pending</Option>
        </Select>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ height: 64, background: "#001529", margin: "16px" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/hr-analytics">Hr Analytics</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/report">Hr Report</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusOutlined />}>
            <Link to="/job-creation">Create Job</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            <Link to="/excel">Manage Excel Sheet</Link>
          </Menu.Item>
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
                <Table columns={jobColumns} dataSource={jobData} rowKey="id" />
              </Card>
            )}

            {/* Job Applications */}
            {loadingApplications ? (
              <Spin size="large" />
            ) : error ? (
              <Alert message={error} type="error" />
            ) : (
              <Card title="Job Applications" bordered={false}>
                <Table columns={applicationColumns} dataSource={applicationData} rowKey="id" />
              </Card>
            )}
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HRDashboard;
