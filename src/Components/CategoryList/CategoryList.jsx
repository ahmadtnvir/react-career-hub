import { useEffect, useState } from "react";
import List from "../List/List";

const CategoryList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-[#1A1919] font-extrabold text-5xl">
          Job Category List : {lists.length}
        </h2>
        <p className="text-[#757575] font-medium leading-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
            lists.map(list => <List key={list.id} list={list}></List>)
        }
      </div>
    </div>
  );
};

export default CategoryList;
