import sql from 'better-sqlite3'

const db = sql('meals.db')
export async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,5000));
    //throw new error('failed tp fetch');
  return  db.prepare(`select * from meals`).all()
}


export function getMeal(slug){
  return  db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}