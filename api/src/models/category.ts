import { DataTypes } from 'sequelize';
import db from '../../db/connection';


const Category = db.define('Category', {
    nombre: {
        type: DataTypes.STRING
    },
    
});


export default Category;