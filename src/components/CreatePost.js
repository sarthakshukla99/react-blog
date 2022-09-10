import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore"; 


function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    
        firestore.collection('posts').add({
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date(),
        });
    }

  return (
    <div className="create-post">
        <h1>CreatePost</h1>

        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="">Title</label>
                <input {...title} />
            </div>

            <div className="form-field">
                <label htmlFor="">Sub Title</label>
                <input {...subTitle}/>
            </div>

            <div className="form-field">
                <label htmlFor="">Content</label>
                <textarea {...content}></textarea>
            </div>

            <button className="create-post-btn">Create Post</button>

        </form>
    </div>

    
  )
}

export default CreatePost