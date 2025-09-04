import css from "./HomePage.module.css";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function HomePage() {
  return (
    <div className={css.page}>
      <Container className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Button className={css.viewButton} linkTo="/catalog">
            View Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
