import useinputState from "../../hooks/useinputState";


const HookForm = () => {
    // const [name , handleNameChange] = useinputState('');
    const emailState = useinputState('ailsa@picci.gu')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data');
        console.log(emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;