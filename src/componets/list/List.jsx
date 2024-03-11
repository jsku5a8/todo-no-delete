const List = ({ texts }) => {
  return (
    <div className="list">
      {texts.map((text) => {
        return <div key={text.id}>{text.text}</div>;
      })}
    </div>
  );
};

export default List;
