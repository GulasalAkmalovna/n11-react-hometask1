const Table = (user, setUser) => {
   function filterUser() {
      user.setUser([
         {
            id: 2,
            FirstName: "Jane",
            LastName: "Doe",
            age: 35,
            city: "New York",
         },
         {
            id: 4,
            FirstName: "Jill",
            LastName: "Wilk",
            age: 44,
            city: "New York",
         },
      ]);
   }
   return (
      <div className="container">
         <button className="btn btn-info  mt-5" onClick={() => filterUser()}>
            Armiyaga qabul qilish
         </button>
         <div className="row">
            <table className="table table-striped table-hover table-bordered mt-5">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Age</th>
                     <th>City</th>
                  </tr>
               </thead>
               <tbody>
                  {user.user.map((user, index) => {
                     return (
                        <tr key={index}>
                           <td>{user.id}</td>
                           <td>{user.FirstName}</td>
                           <td>{user.LastName}</td>
                           <td>{user.age}</td>
                           <td>{user.city}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Table;
