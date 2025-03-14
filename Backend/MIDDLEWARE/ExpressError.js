class ExpressError extends Error{// error has two inf: status , message ;
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
}
module.exports=ExpressError;