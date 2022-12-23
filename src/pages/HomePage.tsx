import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CardContainer } from '../components/Cards/CardStyles'
import CategoryCard from '../components/Cards/CategoryCard'
import HeroImage from '../components/HeroImage'
import { ImagesPath } from '../images/ImagesPath'
import { useAppDispatch } from '../store'
import { categoryThunk } from '../store/auth'
import { selectCurrentToken } from '../store/auth'

const HomePage: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [categories, setCategories] = useState<any>([])
    const token = useSelector(selectCurrentToken)
    // const myCategories = useSelector((state) => state.)
    // const [data, setData] = useState({});

    const fetchCategories = async () => {
        const categoryResult = await dispatch(
            categoryThunk({ token: String(token) })
        )
        console.log('category result: ', categoryResult)
        // setCategories(categoryResult)
        // setData(categoryResult);
    }
    // useEffect(() => {
    //     console.log('Use Effect: ', categories)
    // }, [])
    fetchCategories()
    return (
        <>
            <header>
                <HeroImage />
                <Typography margin="40px auto" variant="h4">
                    <span style={{ backgroundColor: '#D1094B', color: '#fff' }}>
                        CATEGOR
                    </span>
                    IES
                </Typography>
            </header>
            <CardContainer>
                <CategoryCard title={'Tops'} imgPath={ImagesPath.Frame8} />
                <CategoryCard
                    title={'Tees & Tanks'}
                    imgPath={ImagesPath.Frame9}
                />
                <CategoryCard title={'T-Shirts'} imgPath={ImagesPath.Frame10} />
                <CategoryCard title={'Jackets'} imgPath={ImagesPath.Frame11} />
                <CategoryCard title={'Knitwear'} imgPath={ImagesPath.Frame12} />
                <CategoryCard title={'Shorts'} imgPath={ImagesPath.Frame13} />
                <CategoryCard title={'Tops'} imgPath={ImagesPath.Frame14} />
                <CategoryCard title={'Skirts'} imgPath={ImagesPath.Frame15} />
            </CardContainer>
        </>
    )
}

export default HomePage
