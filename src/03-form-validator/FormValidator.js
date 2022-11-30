export default function FormValidator() {
    return (
        <form>
            <h2>Sign Up!</h2>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="passworld">Password</label>
            <input type="password" name="password" />
        </form>
    )
}
