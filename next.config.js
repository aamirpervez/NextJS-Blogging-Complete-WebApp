const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants');
module.exports = (phase) => {
    //Set configurations..
PHASE_DEVELOPMENT_SERVER
    if(phase === PHASE_DEVELOPMENT_SERVER)
    {
        return {
            env:{
                mongodb_username:"mongodb_username",
                mongodb_password:"mongodb_password",
                mongodb_clustername:"mongodb_clustername",
                mongodb_database:"mongodb_database"
            }
        }
    }

    return {
        env:{
            mongodb_username:"mongodb_username",
            mongodb_password:"mongodb_password",
            mongodb_clustername:"mongodb_clustername",
            mongodb_database:"mongodb_database"
        }
    }
}