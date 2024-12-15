

import React from "react";
import { Layout, Menu, Table, Card, Typography, Space } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  PlusOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const HRDashboard = () => {
  // Sample job data (replace with API fetch logic)
  const jobData = [
    {
      key: "1",
      title: "Software Engineer",
      company: "TechCorp",
      location: "Remote",
      applicationDeadline: "2024-12-31",
    },
    {
      key: "2",
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "San Francisco, CA",
      applicationDeadline: "2024-11-30",
    },
  ];

  const applicationData = [
    {
      key: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      jobTitle: "Software Engineer",
      appliedAt: "2024-12-01",
    },
    {
      key: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      jobTitle: "Product Manager",
      appliedAt: "2024-11-15",
    },
  ];

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
          <Menu.Item key="2" icon={<FileTextOutlined />}>Job Listings</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>Applications</Menu.Item>
          <Menu.Item key="4" icon={<PlusOutlined />}>Create Job</Menu.Item>
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
            <Card title="Job Listings" bordered={false}>
              <Table columns={jobColumns} dataSource={jobData} />
            </Card>
            <Card title="Job Applications" bordered={false}>
              <Table columns={applicationColumns} dataSource={applicationData} />
            </Card>
          </Space>
        </Content>
        <Footer style={{ textAlign: "center" }}>HR Dashboard ©2024 Created by You</Footer>
      </Layout>
    </Layout>
  );
};

export default HRDashboard;
