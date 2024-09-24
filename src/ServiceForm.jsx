import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceForm = ({ addService, serviceToEdit, updateService }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (serviceToEdit) {
            setName(serviceToEdit.name);
            setDescription(serviceToEdit.description);
            setPrice(serviceToEdit.price);
            setIsEditing(true);
        }
    }, [serviceToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !price) return;

        const newService = {
            id: isEditing ? serviceToEdit.id : Date.now(),
            name,
            description,
            price: parseFloat(price)
        };

        if (isEditing) {
            updateService(newService);
        } else {
            addService(newService);
        }

        setName('');
        setDescription('');
        setPrice('');
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="service-form">
            <motion.input
                type="text"
                placeholder="Service Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            />
            <motion.textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            />
            <motion.input
                type="number"
                step="0.01"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            />
            <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {isEditing ? 'Update' : 'Add'} Service
            </motion.button>
        </form>
    );
};

export default ServiceForm;