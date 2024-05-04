const Phone = ({phone}) => {
    return (
        <div className=''>
           
            <div className="">
            <img src={phone.image} className="w-60" alt="" />
            <p>{phone.brand_name}</p>
            <p>{phone.phone_name}</p>
            <p>{phone.price}</p>
            </div>
        </div>
    );
};

export default Phone;