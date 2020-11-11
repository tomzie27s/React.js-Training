import React from "react";

const imgLorem = "https://picsum.photos/200";

function TestMenu() {
    return (
      <div>
        <div className="food-img">
          <img src={imgLorem} alt="Lorem Picsum"/>
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="BBC Good Food"/>
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Unsplash Food"/>
          <img src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg" alt="Tacos"/>
        </div>
      </div>
    );
  };

  export default TestMenu;