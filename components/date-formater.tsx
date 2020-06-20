import { parseISO, format } from 'date-fns'
import PostDetailStyles from './post-detail-styles.module.css'

type Props = {
    dateString: string
}

const DateFormater = ({ dateString }: Props) => {
    const date = parseISO(dateString)
    return (
        <time
            className={`${PostDetailStyles['post-date']} font-medium text-base`}
            dateTime={dateString}
        >
            {format(date, 'LLLL	d, yyyy')}
        </time>
    )
}

export default DateFormater
