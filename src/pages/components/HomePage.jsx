export const HomePage = ({ dorty }) => {

  return (
    <div>
      {dorty.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image_url} alt={item.name} />
          <button className="btn" type="button" data-id={item.id}>Detail</button>
        </div>
      ))}
    </div>
  );
};
