import NewsCard from '..';
import cls from './List.module.scss'

const NewsCardList = ({items, desc = true}) => {
    return (
        <div className={cls.list}>
            {
                items?.length > 0 && items.map(item => <NewsCard key={item.id} {...item} desc={desc && item.desc}/>)
            }
        </div>
    );
}

export default NewsCardList;
