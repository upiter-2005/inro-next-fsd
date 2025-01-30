'use client'
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Select from 'react-select';



type NovaPoshtaTypesa = {
    apiKey: string | undefined,
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
    

  

    const getCities = async(query = '') => {
        const param: NovaPoshtaTypesa = {
            apiKey: process.env.NEXT_PUBLICK_NP_KEY,
          "modelName": "AddressGeneral",
            "calledMethod": "getCities",
            methodProperties: {
                "FindByString" : query,
                "Page" : "1",
                "Limit" : "90"
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
            apiKey: process.env.NEXT_PUBLICK_NP_KEY,
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


       
    const setNPDepartment = (query: any) => {
        setNpApiDepartment(query.value)
    }


    const inputDinamicDepartments = (value: any) => {
        getCities(value)
        setCities(value)
    }

 
    const changeDinamicDepartments = (value: any) => {
        getWarehouses(value.value)
        setNpApiCity(value.value)
    }


    
return (
    <div className="selectBox">
       
        <Select options={citiesNP}
             onInputChange={inputDinamicDepartments}
             onChange={changeDinamicDepartments}
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