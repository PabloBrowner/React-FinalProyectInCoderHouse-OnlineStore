const Input = ({ label, name, handleChange }) => {
    return (
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ marginRight: 4 }}>{label}</label>
        <input name={name} type="text" onChange={handleChange} />
      </div>
    );
  };
  
  export default Input;