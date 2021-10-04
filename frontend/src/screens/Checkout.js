
import React from "react";

const Checkout = (props) => {
    const order = () => {
        alert("Order Placed Successfully..!");
        props.history.push("/");
      };
    return(
        <div>
        <div
          className="shadow p-3 mb-3 bg-white rounded justify-content-center"
          style={{ margin: 50 }}
        >
          <form>
            <div className="form-row ">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>Maharashtra</option>
                  <option>Bihar</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>


            <div className="form-row ">
              <div className="form-group col-md-6">
                <label for="cd">Card Details</label>
                <input
                  type="number"
                  className="form-control"
                  id="cd"
                  placeholder="Card Details"
                />
              </div>
              <div className="form-group col-md-3">
                <label for="cvv">CVV</label>
                <input
                  type="number"
                  className="form-control"
                  id="cvv"
                  placeholder="CVV"
                />
              </div>
              </div>

            <button type="submit" className="btn btn-dark" onClick={order}>
              Place Order
            </button>
          </form>
        </div>
      </div>
    )
}
export default Checkout


