import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Trash2, X } from 'react-feather';
import ServiceForm from './ServiceForm';

const ServiceList = ({ services, updateService, deleteService }) => {
    const [editingService, setEditingService] = useState(null);

    const handleUpdate = (updatedService) => {
        updateService(updatedService);
        setEditingService(null);
    };

    return (
        <div className="service-grid">
            <AnimatePresence>
                {services.map(service => (
                    <motion.div
                        key={service.id}
                        className="service-card"
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <div className="service-content">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <p className="price">${service.price}</p>
                        </div>
                        <div className="service-actions">
                            <button className="edit-btn" onClick={() => setEditingService(service)}>
                                <Edit2 size={18} />
                                <span>Edit</span>
                            </button>
                            <button className="delete-btn" onClick={() => deleteService(service.id)}>
                                <Trash2 size={18} />
                                <span>Delete</span>
                            </button>
                        </div>
                        <AnimatePresence>
                            {editingService && editingService.id === service.id && (
                                <motion.div
                                    className="edit-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="edit-container">
                                        <button className="close-edit" onClick={() => setEditingService(null)}>
                                            <X size={24} />
                                        </button>
                                        <ServiceForm
                                            serviceToEdit={editingService}
                                            updateService={handleUpdate}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ServiceList;