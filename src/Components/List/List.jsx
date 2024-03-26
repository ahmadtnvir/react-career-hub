const List = ({list}) => {
    const {logo, category_name, availability} = list;
    return (
        <div>
            <img src={logo} alt="" />
            <h4>{category_name}</h4>
            <p>{availability}</p>
        </div>
    );
};

export default List;