import { Skeleton, Switch, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Meta } = Card;

const Project = ({ project }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Card
      style={{ width: 250, marginTop: 16,marginRight: 16 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={project.title}
          description={project.description}
        />
      </Skeleton>
    </Card>
  );
};

export default Project;
