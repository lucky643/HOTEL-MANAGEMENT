class CustomError extends Error{
     constructor(message, statuscode){
          super(message);
          this.statuscode = statuscode;

          if (Error.captureStackTrace){
               Error.captureStackTrace(this, CustomError);
          }
     }
}