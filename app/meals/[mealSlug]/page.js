import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meal'

export default   function MealDetailPage({params}){
   const mealed = getMeal(params.mealSlug)
   mealed.instructions = mealed.instructions.replace(/\n/g,"<br/>")
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={mealed.image} alt = {mealed.title} fill/>
            </div>
            <div className={classes.headerText}>
                <h1> {mealed.title} </h1>
                <p className={classes.creator}>
                    by <a href= {`MailTo:${mealed.creator_email}`}>{mealed.creator}</a>
                </p>
                <p className={classes.summary}>{mealed.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html:mealed.instructions}}></p>
        </main>
        </>
    )
     
 }