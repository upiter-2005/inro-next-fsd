'use client'
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Select from 'react-select';



type NovaPoshtaTypesa = {
    apiKey: string,
    calledMethod: string,
    modelName: string,
    methodProperties: any
}

type DepartmentsType = {
    value: string,
    label: string
}

interface INpApi {
    setNpApiCity: (val: string) => void
    setNpApiDepartment: (val: string) => void
    apiCity: string
    apiDepart: string
}
const NpApi:React.FC<INpApi> = ({setNpApiCity, setNpApiDepartment, apiCity, apiDepart}) => {
    
    const [cities, setCities] = useState<[]>([])
    const [citiesNP, setCitiesNP] = useState<DepartmentsType[]>([])
    const [departmentsNP, setDepartmentsNP] = useState<DepartmentsType[]>([])
    const [cityVal, setCityVal] = useState<string>('')
    const [department, setDepartment] = useState<string>('')
    

  

    const getCities = async() => {
        const param: NovaPoshtaTypesa = {
            apiKey: "d78f7880553af3f08072ac2354cd902f",
            calledMethod: "getCities",
            modelName: "Address",
            methodProperties: {
                //FindByString: 'Бровари'
            }
        }
        try {
            axios.post('https://api.novaposhta.ua/v2.0/json/', param )
            .then(res => {
                setCities(res.data.data)
                const options: DepartmentsType[] = []
                res.data.data.forEach((el:any) => {
                    options.push({value: el.Description, label: el.Description});
                })
                
                setCitiesNP(options)
            })
        } catch (error) {
            
        }
    }


    const getWarehouses = async(query: string) => {
        const param: NovaPoshtaTypesa = {
            apiKey: "ee8c3d42f9f5dfe39a3ad4c2636f747a",
            calledMethod: "getWarehouses",
            modelName: "Address",
            methodProperties: {
                //SettlementRef: "7150812c-9b87-11de-822f-000c2965ae0e"
             
               CityName: query
            }
        }
        try {
            axios.post('https://api.novaposhta.ua/v2.0/json/', param )
            .then(res => {
                const options: DepartmentsType[] = []
                res.data.data.forEach((el:any) => {
                    options.push({value: el.Description, label: el.Description});
                })
                
                setDepartmentsNP(options)
            })
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        getCities()
       
    }, [])

    
    const setNPDepartment = (query: any) => {
        console.log(query);
        setDepartment(query.value)
        setNpApiDepartment(query.value)
    }


 
    const dinamicDepartments = (value: any) => {
        console.log(value);
        setCityVal(value.value);getWarehouses(value.value);
        setNpApiCity(value.value)
    }


    
return (
    <div className="selectBox">
       
        <Select options={citiesNP}
            onChange={dinamicDepartments}
            className="np-department-select"
            placeholder={apiCity || `Оберіть місто`} 
            
          styles={{
            option: (provided: any, state: { isFocused: any; }) => ({
                ...provided,
                color: "#1e1e1e",
                fontSize: 14,
                backgroundColor: state.isFocused ? "#eee" : "#fff",
                cursor: "pointer",
                borderColor: "#333",
                outline: "none",
                border: "none"

            })

            
          }}
            classNamePrefix="react-select" />
        <Select  options={departmentsNP}
            onChange={setNPDepartment}
            className="np-department-select"
            placeholder={apiDepart || `Оберіть відділення Нової пошти`} 
           
          styles={{
            option: (provided: any, state: { isFocused: any; }) => ({
                ...provided,
                color: "#1e1e1e",
                fontSize: 14,
                backgroundColor: state.isFocused ? "#eee" : "#fff",
                cursor: "pointer",
                borderColor: "#333",
                outline: "none",
                border: "none"

            })

            
          }}
            classNamePrefix="react-select" />
    </div>
  )
}
export default NpApi