import React from "react";

const InputFiled = ({set_value,value}) => {
  return (
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        value={value}
        required
        onChange={(e) => set_value(e.target.value)}
      />
      <label for="name" class="form__label">
        Title
      </label>
    </div>
  );
};

export default InputFiled;


export const InputArea = ({set_value,value}) => {
  return (
    <div class="form__group field">
      <textarea
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        value={value}
        rows="10" cols="50"
        required
        onChange={(e) => set_value(e.target.value)}
      />
      <label for="name" class="form__label">
      Description
      </label>
    </div>
  );
};
 
