import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Pet {
  name: string;
  age: number;
  species: string;
  breed: string;
  color: string;
}

export default function Pets() {
  const [petList, setPetList] = useState<Pet[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState<Pet>({ name: '', age: 0, species: '', breed: '', color: '' });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    setPetList([
      {
        name: 'Honey',
        age: 1,
        species: 'Cat',
        breed: 'Indie',
        color: 'Ginger',
      },
    ]);
  }, []);

  const openAddModal = () => {
    setForm({ name: '', age: 0, species: '', breed: '', color: '' });
    setEditIndex(null);
    setModalVisible(true);
  };

  const openEditModal = (index: number) => {
    setForm(petList[index]);
    setEditIndex(index);
    setModalVisible(true);
  };
  console.log(form.name)

  const handleSave = () => {
    if (!form.name) return;

    if (editIndex !== null) {
      const updatedList = [...petList];
      updatedList[editIndex] = form;
      setPetList(updatedList);
    } else {
      setPetList([...petList, form]);
    }

    setForm({ name: '', age: 0, species: '', breed: '', color: '' });
    setEditIndex(null);
    setModalVisible(false);
  };

  const handleChange = (key: keyof Pet, value: string) => {
    setForm({ ...form, [key]: key === 'age' ? Number(value) : value });
  };

  const renderPetItem = ({ item, index }: { item: Pet; index: number }) => (
    <TouchableOpacity onPress={() => openEditModal(index)} style={styles.petCard}>
      <Text style={styles.petName}>{item.name}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Species: {item.species}</Text>
      <Text>Breed: {item.breed}</Text>
      <Text>Color: {item.color}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={petList}
        renderItem={renderPetItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <TouchableOpacity style={styles.addButton} onPress={openAddModal}>
        <Text style={styles.addButtonText}>Add New Pet</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>
                {editIndex !== null ? 'Edit Pet' : 'Add New Pet'}
              </Text>

              {(['name', 'age', 'species', 'breed', 'color'] as (keyof Pet)[]).map((key) => (
                <TextInput
                  key={key}
                  placeholder={key[0].toUpperCase() + key.slice(1)}
                  style={styles.input}
                  keyboardType={key === 'age' ? 'numeric' : 'default'}
                  value={form[key]?.toString()}
                  onChangeText={(val) => handleChange(key, val)}
                />
              ))}

              <TouchableOpacity
                style={[styles.saveButton, { backgroundColor: '#007bff', marginBottom: 10 }]}
                onPress={() => {
                setModalVisible(false);
                router.replace(`/(track)/vaccination?id=${form.name}`)
                //router.push({ pathname: '(track)/deworming', params: { index: editIndex?.toString() ?? '-1' } });
                }}
              >
                <Text style={styles.addButtonText}>Health Tracker</Text>
                </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.addButtonText}>{editIndex !== null ? 'Update' : 'Save'}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.saveButton, { backgroundColor: '#aaa', marginTop: 10 }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.addButtonText}>Cancel</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  petCard: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    elevation: 2,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#7B3F00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: '#7B3F00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
