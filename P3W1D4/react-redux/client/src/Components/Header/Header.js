import { Link } from "react-router-dom";
import { PageHeader, Button } from "antd";

export default function () {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="My app"
        subTitle="is amazing"
        extra={[
          <Link to="/">Home</Link>,
          <Link to="/about">About</Link>,
          <Link to="/info">Info</Link>,
        ]}
      ></PageHeader>
    </div>
  );
}
