import React from "react";
import NavbarUsers from "../../includes/NavbarUsers";



const Users = [
  {
    id: 1,
    selected: false,
    ID:1,
    MedicineName : "Cotrimaxazole 480 mg",
    Dosage: "1 tab bd",
    Duration: "5/365",
    
  },
  {
    id: 2,
    selected: false,
    ID:2,
    MedicineName : "Metronidazole 400 mg",
    Dosage: "1 tab bd",
    Duration: "5/365",

  },
  {
    id: 3,
    selected: false,
    ID: 3,
    MedicineName : "Promethazine 10 mg",
    Dosage: "1.5 tab bd",
    Duration: "5/365",
   
  },
  {
    id: 4,
    selected: false,
    ID: 4,
    MedicineName : "Ezo omeprazole 20 mg",
    Dosage: "1 tab bd",
    Duration: "5/365",
    
  },
  
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">ID</th>
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Dosage</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.ID}</td>
                    <td>{user.MedicineName}</td>
                    <td>{user.Dosage}</td>
                    <td>{user.Duration}</td>

                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-success"
              onClick={() => this.getSelectedRows()}
            >
              Checked Medicines {this.state.SelectedList.length} 
            </button>
            <div className="row">
              {/* <b>All Row Items:</b>
              <code>{JSON.stringify(this.state.List)}</code> */}
            </div>
            {/* <div className="row">
              <b>Selected Row Items(Click Button To Get):</b>
              <code>{JSON.stringify(this.state.SelectedList)}</code>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTableComponent;