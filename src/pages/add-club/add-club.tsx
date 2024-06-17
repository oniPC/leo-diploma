import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/button/button";
import TextInput from "../../components/text-input/text-input";
import { ISetClub } from "../../firebase/types";
import { request } from "../../helpers";
import styles from "./add-club.module.css";

const AddClub = () => {
    const [formData, setFormData] = useState<ISetClub>({
        address: "",
        description: "",
        name: "",
        network: "",
        photo: "",
        typenetwork: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }))
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        request("setClub",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
    };

    return (
        <section className={styles.section}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Добавить клуб</h2>
                <TextInput
                    type="text"
                    placeholder={"Адрес"}
                    value={formData.address}
                    onChange={handleChange}
                    name="address"
                />
                <TextInput
                    type="text"
                    placeholder={"Название"}
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                />
                <TextInput
                    type="text"
                    placeholder={"Описание"}
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                />
                <TextInput
                    type="text"
                    placeholder={"Фото (необязательно)"}
                    value={formData.photo}
                    onChange={handleChange}
                    name="photo"
                />
                <TextInput
                    type="text"
                    placeholder={"Соц. сеть"}
                    value={formData.network}
                    onChange={handleChange}
                    name="network"
                />
                <TextInput
                    type="text"
                    placeholder={"Тип соц. сети"}
                    value={formData.typenetwork}
                    onChange={handleChange}
                    name="typenetwork"
                />
                <Button type="submit">Добавить</Button>
            </form>
        </section>
    )
};

export default AddClub;