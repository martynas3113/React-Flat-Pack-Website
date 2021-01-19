function validateForm(name){
    const nameLength = name.split("").length
    if(nameLength < 2){
        this.setState({
            errorText: `Name can't be shorter than 2 symbols`,
            error: true
        })
    }
    else{
        this.setState({
            errorText: '',
            error: false
        })
}
}
export {validateForm};