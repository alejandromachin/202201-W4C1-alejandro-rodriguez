const Info = ({ numberOfMarkedGentelmen }) => {
  return (
    <>
      <section className="controls">
        <p className="info">
          {numberOfMarkedGentelmen} gentlemen pointing at you
        </p>
        <button className="button button--select">Select all</button>
      </section>
    </>
  );
};

export default Info;
