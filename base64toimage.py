import base64 
image = open('ajax-loader.gif', 'rb') 
image_read = image.read() 
image_64_encode = base64.encodebytes(image_read) 
print(image_64_encode)
#image_64_decode = base64.decodebytes(image_64_encode) 
#image_result = open('deer_decode.gif', 'wb') 
#image_result.write(image_64_decode)

#####escribir un base64 a imf
import base64
imgdata = base64.b64decode(imgstring)
filename = 'some_image.jpg'  # I assume you have a way of picking unique filenames
with open(filename, 'wb') as f:
    f.write(imgdata)