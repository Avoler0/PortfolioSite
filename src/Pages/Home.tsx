import styled from "styled-components";
import { Container, Layout } from "../Commons/basicStyle";

function Home() {
  return (
    <Container>
      <Layout>
        <Content>

        </Content>
      </Layout>
    </Container>
  );
}
const Content = styled.div`
  margin-top: 5rem ;
  height: 50rem;
  background-color: gray;
`;
export default Home;