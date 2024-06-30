class ApiResponse{
    constructor(
        StatusCode,
        message="Success",
        data
    ){
       this.StatusCode=StatusCode
       this.message=message
       this.data=data
    }
}


export { ApiResponse }