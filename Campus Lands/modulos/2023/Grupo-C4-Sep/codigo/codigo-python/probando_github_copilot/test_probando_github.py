import unittest
from probando_github import encriptar_password  # Ajustar la ruta del módulo según sea necesario

class TestEncriptarPassword(unittest.TestCase):

    def test_return_type(self):
        result = encriptar_password("test_password")
        self.assertIsInstance(result, str)

    def test_correct_hash(self):
        password = "mi_password_secreto"
        expected_hash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        self.assertEqual(encriptar_password(password), expected_hash)

    def test_different_inputs(self):
        password1 = "password1"
        password2 = "password2"
        self.assertNotEqual(encriptar_password(password1), encriptar_password(password2))

if __name__ == '__main__':
    unittest.main()