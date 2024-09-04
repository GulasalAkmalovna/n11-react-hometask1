const Index = ({ setCount }) => {
   return (
      <div>
         <h1>About page</h1>
         <button
            className="btn btn-info ms-2"
            onClick={() => setCount((count) => count + 1)}
         >
            +
         </button>
         <button
            className="btn btn-danger ms-2"
            onClick={() => setCount((count) => count - 1)}
         >
            -
         </button>
      </div>
   );
};

export default Index;
