import styles from '@/app/parallel/_component/main.module.css'
import { ReactNode } from 'react'

type Prop = {
    children : ReactNode;
}

export default function Layout({children}:Prop){
    return (
        <div>
            {children}
        </div>
    )
}