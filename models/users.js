//youtube video :https://www.youtube.com/watch?v=6ZQQklg4WLk
//https://github.com/Clemios/nodeJS-mysql-CRUD

//import connection
import db from "../config/database.js";

//get users
export const getUserById = (id, result) => {
    db.query(
        "SELECT*FROM USERS WHERE users_id=?",
        [id],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        }
    );
};

//insert users to databased
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

// Update users to Database
export const updateProductById = (data, id, result) => {
    db.query(
        "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
        [data.product_name, data.product_price, id],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }
    );
};

// Delete Users to Database
export const deleteProductById = (id, result) =>
    db.query("DELETE FROM users WHERE product_id=?", [id], (err, results) => {
        if (err) {
            console.log(err);

            result(err, null);
        } else {
            result(null, results);
        }
    });