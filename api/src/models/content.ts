import { DataTypes } from 'sequelize';
import db from '../../db/connection';


const Content = db.define('Content', {
    titulo: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },

    
    detalle: {
        type: DataTypes.STRING
    },
});


export default Content;