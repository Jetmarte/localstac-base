
const { createClient } = require('@supabase/supabase-js');

// Reemplaza estos valores con tu URL y clave de API de Supabase
const supabaseUrl = ''
const supabaseKey = '';

const supabase = createClient(supabaseUrl, supabaseKey);

// Ejemplo de uso
async function getData() {
  let { data, error } = await supabase
    .from('persona')
    .select('*')
  //   .eq('id', 1)
  //.single()

  if (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  } else {
    console.log('Data:', data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }
}

module.exports = { getData }
