import "../../styles/styles.css";
const Gentelmen = ({ gentelman }) => {
  const { name, status, profession, twitter, picture, alternativeText } =
    gentelman;
  const getInitial = () => {
    const nameParts = name.split(" ");
    if (nameParts[0].length <= 3) {
      return nameParts[1].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  };
  return (
    <>
      <li className="gentleman">
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={`images/${picture}`}
            alt={alternativeText}
          />
          <span className="gentleman__initial">{getInitial()}</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              {profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span> {status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span> {twitter}
            </li>
          </ul>
        </div>
        <i className="icon gentleman__icon fas fa-check"></i>
        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
      </li>
    </>
  );
};

export default Gentelmen;
