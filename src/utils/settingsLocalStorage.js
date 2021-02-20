export const restoreSettings = () => {
  let settings = null;

  try{
    const storedData = localStorage.getItem('settings');

    if(storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err){
    // Jika data tidak strigified akan gagal
  }

  return settings;
}

export const storeSettings = (settings) => {
  localStorage.setItem('settings', JSON.stringify(settings));
}

