import cv2
import numpy as np

# Create a black background image
black_screen = np.zeros((720, 1280, 3), dtype=np.uint8)  # Adjust the resolution as needed

# Initialize the message text and font settings
message = "You have left the screen"
font = cv2.FONT_HERSHEY_SIMPLEX
font_scale = 2  # Adjust font size as needed
font_color = (0, 0, 255)  # Red color
font_thickness = 3

# Get the text size to center it on the black background
(text_width, text_height), baseline = cv2.getTextSize(message, font, font_scale, font_thickness)
x = (black_screen.shape[1] - text_width) // 2
y = (black_screen.shape[0] + text_height) // 2

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)

while True:
    _, img = cap.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    if len(faces) == 0:
        # No faces detected, display the message on the black background
        black_screen[:] = (0, 0, 0)  # Set the background to black
        cv2.putText(black_screen, message, (x, y), font, font_scale, font_color, font_thickness)
        cv2.imshow('Full Screen', black_screen)
    else:
        # Faces detected, show the video feed
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
        cv2.imshow('Full Screen', img)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()
import cv2
import numpy as np

# Create a black background image
black_screen = np.zeros((720, 1280, 3), dtype=np.uint8)  # Adjust the resolution as needed

# Initialize the message text and font settings
message = "You have left the screen"
font = cv2.FONT_HERSHEY_SIMPLEX
font_scale = 2  # Adjust font size as needed
font_color = (0, 0, 255)  # Red color
font_thickness = 3

# Get the text size to center it on the black background
(text_width, text_height), baseline = cv2.getTextSize(message, font, font_scale, font_thickness)
x = (black_screen.shape[1] - text_width) // 2
y = (black_screen.shape[0] + text_height) // 2

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)

while True:
    _, img = cap.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    if len(faces) == 0:
        # No faces detected, display the message on the black background
        black_screen[:] = (0, 0, 0)  # Set the background to black
        cv2.putText(black_screen, message, (x, y), font, font_scale, font_color, font_thickness)
        cv2.imshow('Full Screen', black_screen)
    else:
        # Faces detected, show the video feed
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
        cv2.imshow('Full Screen', img)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()
