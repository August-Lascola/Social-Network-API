//  Add in date using moment.js 

const moment = require ('moment')

const formatDate = (date) =>  {   
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
};

module.exports = formatDate;