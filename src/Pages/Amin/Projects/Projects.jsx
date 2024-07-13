import { Button, Table } from "antd";
import { useGetAllProjectQuery } from "../../../redux/features/project/projectApi";

const Projects = () => {
  const { data: projectData } = useGetAllProjectQuery();

  const columns = [
    {
      title: "Name",
      dataIndex: "porject_name",
      key: "porject_name",
    },
    {
      title: "Title",
      dataIndex: "porject_title",
      key: "porject_title",
    },
    {
      title: "Live Link",
      dataIndex: "porject_client_side",
      key: "porject_client_side",
      render: (item) => {
        return (
          <div>
            <Button
              href={item}
              style={{ textDecoration: "none" }}
              type="primary"
              target="_blank"
            >
              Client Side
            </Button>
          </div>
        );
      },
    },
    {
      title: "Live Link",
      dataIndex: "porject_server_side",
      key: "porject_server_side",
      render: (item) => {
        return (
          <div>
            <Button
              href={item}
              style={{ textDecoration: "none" }}
              type="primary"
              target="_blank"
            >
              Server Side
            </Button>
          </div>
        );
      },
    },
    {
      title: "Live Link",
      dataIndex: "porject_live_link",
      key: "porject_live_link",
      render: (item) => {
        return (
          <div>
            <Button
              href={item}
              style={{ textDecoration: "none" }}
              type="primary"
              target="_blank"
            >
              Live
            </Button>
          </div>
        );
      },
    },

    /*     {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }, */
    /* {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    }, */
  ];

  return (
    <div style={{ padding: "10px" }}>
      <h>Projects</h>
      <Table columns={columns} dataSource={projectData?.data} />
    </div>
  );
};

export default Projects;
