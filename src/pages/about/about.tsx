import { Container } from "react-bootstrap";
import { Comment } from "@/components/Comment";

export const About = () => {
  return (
    <Container fluid={true}>
      <h1>ABOUT</h1>
      <hr />

      <h2>WEB DEVELOPER</h2>

      <p>
        <img
          src="https://github-readme-stats.vercel.app/api?username=dhrod0325"
          alt="junilhwang's github stats bn"
          className="medium-zoom-image"
        />
      </p>

      <h2>이력</h2>

      <ul>
        <li>주식회사 인터텍 차장</li>
        <li>프리랜서</li>
        <li>주식회사 BMS 대리</li>
        <li>네오인터넷 연구원</li>
        <li>제주대학교 컴퓨터공학과 졸업</li>
      </ul>

      <Comment issueTerm="about" />
    </Container>
  );
};
