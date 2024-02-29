const { default: supabase } = require("./supabase");

async function submitForm(option, date) {
  console.log("submitForm", option, date);

  const { error } = await supabase
    .from("Drury Survey")
    .insert([{ option, date }]);

  if (error) {
    console.error("error", error);
    throw error;
  }
  return "success!";
}

module.exports = submitForm;
