import "./landing_page_header.css";

export default function LandingPageHeader(props: {title: string}) {
    return <div className="landing-page-header">{props.title}</div>;
}