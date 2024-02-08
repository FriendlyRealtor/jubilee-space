import React, { useEffect, useState } from 'react';
import { Container, Header, AddLink, Icon, Button, Modal } from '../../components/UI';
import { StarRating, SendMessageModal } from '../../components';
import {
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  collection,
  getDocs,
  where,
  query,
  updateDoc,
} from 'firebase/firestore';
import Image from 'next/image';
import { firestore, auth } from '../../context';
import moment from 'moment';

const ProfilePage = ({ data }) => {
  const [saving, setSaving] = useState<boolean>(false);
  const [saving2, setSaving2] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [userID, setUserID] = useState(undefined);
  const [messageText, setMessageText] = useState<string>('');
  const [reviews, setReviews] = useState([]);
  const [userDoc, setUserDoc] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!data || !data.name) {
    return <p className="text-white text-4xl flex justify-center">No Profile Found!</p>;
  }

  useEffect(() => {
    if (data.userName) {
      const fetchUserID = async () => {
        try {
          const usersCollection = collection(firestore, 'users'); // Replace 'firestore' with your Firestore instance
          const userQuery = query(usersCollection, where('userName', '==', data.userName));
          const userQuerySnapshot = await getDocs(userQuery);

          if (userQuerySnapshot.docs.length > 0) {
            // Set the user's document ID in the state
            setUserID(userQuerySnapshot.docs[0].id);
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      };

      // Function to fetch reviews for this user from Firestore
      const fetchReviews = async () => {
        try {
          // Query the 'users' collection to get the user's document
          const usersCollection = collection(firestore, 'users');
          const userQuery = query(usersCollection, where('userName', '==', data.userName));
          const userQuerySnapshot = await getDocs(userQuery);

          if (userQuerySnapshot.docs.length > 0) {
            // Get the user's document ID
            const userId = userQuerySnapshot.docs[0].id;

            // Query the 'reviews' collection to get reviews for this user using userId as the document ID
            const reviewsCollection = collection(firestore, 'reviews');
            const userReviewsQuery = doc(reviewsCollection, userId);
            const userReviewsDoc = await getDoc(userReviewsQuery);

            if (userReviewsDoc.exists()) {
              // The user's reviews data is in userReviewsDoc.data().reviews
              const reviewsData = userReviewsDoc.data().reviews || [];
              setReviews(reviewsData);
            }
          }
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };

      fetchUserID();
      fetchReviews();
    }
  }, [data.userName]);

  // Function to add a new review to Firestore
  const addReview = async () => {
    setSaving(true);
    try {
      const usersCollection = collection(firestore, 'users');
      const userQuery = query(usersCollection, where('userName', '==', data.userName));
      const userQuerySnapshot = await getDocs(userQuery);

      if (userQuerySnapshot.docs.length > 0) {
        // Get the user's document ID
        const userId = userQuerySnapshot.docs[0].id; // Assuming you have the ID here
        const reviewsCollection = collection(firestore, 'reviews');
        const reviewDocRef = doc(reviewsCollection, userId);
        const reviewDocSnapshot = await getDoc(reviewDocRef);

        if (reviewDocSnapshot.exists()) {
          // Create a new review object
          const newReview = {
            rating: rating, // The rating value you want to add
            text: reviewText, // The review text you want to add
            reviewerId: auth.currentUser?.uid || '',
          };

          // Use updateDoc to add the new review to the "reviews" array field
          await updateDoc(reviewDocRef, {
            reviews: arrayUnion(newReview),
          });
        } else {
          const newReview = {
            rating: rating, // The rating value you want to add
            text: reviewText, // The review text you want to add
            reviewerId: auth.currentUser?.uid || '',
          };

          // Create a new review document with the userId as the document name and the initial review
          await setDoc(reviewDocRef, {
            reviews: [newReview],
          });
        }

        setRating(0);
        setReviewText('');
      } else {
        // If the user's document doesn't exist, create a new document using setDoc
        const newUserId = userQuerySnapshot.docs[0].data().userId;
        const newReviewsCollection = collection(firestore, 'reviews');
        const newReviewDocRef = doc(newReviewsCollection, newUserId);

        // Create a new review object
        const newReview = {
          rating: rating, // The rating value you want to add
          text: reviewText, // The review text you want to add
          reviewerId: auth.currentUser?.uid || '',
        };

        // Set the data for the new review document
        await setDoc(newReviewDocRef, {
          reviews: [newReview],
        });

        setRating(0);
        setReviewText('');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    } finally {
      setSaving(false);
    }
  };

  const defaultBio = `Experienced agent ${data.name} dedicated to helping home buyers find their dream homes. Trustworthy guidance and exceptional service for a seamless home buying experience. Let's make your homeownership dreams a reality.`;
  const defaultSeoBio = `Experienced agent ${
    data.name
  } dedicated to helping home buyers find their dream homes${
    data.serviceZipCodes && data.serviceZipCodes.length > 0
      ? ` in ${data.serviceZipCodes.join(', ')}`
      : data.location
      ? ` in ${data.location}`
      : ''
  }. Trustworthy guidance and exceptional service for a seamless home buying experience. Let's make your homeownership dreams a reality.`;

  const firstName = data?.name?.split(' ')[0];

  return (
    <Container
      seoProps={{
        title: `JubileeSpace - Agent ${data.name}`,
        description: `${data.bio || defaultSeoBio}`,
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.name}</h1>
              {data.company && (
                <p className="text-gray-500 dark:text-gray-400">Company: {data.company}</p>
              )}
              {data.location && (
                <p className="text-gray-500 dark:text-gray-400">
                  Service Location: {data.location}
                </p>
              )}
            </div>
            {data?.services?.length && (
              <div className="space-y-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-500">
                      <th className="text-left">Service</th>
                      <th className="text-left">Description</th>
                      <th className="text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-black">
                    {data.services.map((service) => {
                      return (
                        <tr className="px-2">
                          <td>{service.name}</td>
                          <td>{service.description}</td>
                          {service.price ? (
                            <td className="text-right">${service.price}</td>
                          ) : (
                            'Free'
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex items-center gap-2 mt-4">
              <SendMessageModal userID={userID} />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  // You might want to add a timeout to reset the state after a certain duration
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000); // Reset after 2 seconds
                }}
                className="flex items-center px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 5a2 2 0 00-2-2H8a2 2 0 00-2 2v1h8V5zM6 8H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2h1a2 2 0 002-2V8a2 2 0 00-2-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Share Profile
                {copied && <span className="ml-2 text-green-500">Link copied!</span>}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={data.photo}
              alt={`${data.name} profile image`}
              width="700"
              height="420"
              className="aspect-video object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>
      {data.events?.length > 0 && (
        <div>
          <div className="text-xl font-bold py-8">Upcoming Events</div>
          <div className="flex flex-wrap cursor-pointer gap-6">
            {data.events.map((event, index) => {
              return (
                <a
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-96 hover:bg-blue-500"
                  href={`/event-center/${event.id}`}
                >
                  <div className="p-6 grid gap-1">
                    <h3 className="text-lg font-semibold leading-none mb-2">{event.title}</h3>
                    <p className="text-sm leading-none mb-2">{event.location}</p>
                    <p className="text-sm leading-none mb-2">{event.organizer}</p>
                    <p className="text-sm leading-none mb-2">
                      {event.dateStartTime} - {event.dateEndTime}
                    </p>
                    <p className="text-sm leading-none mb-2">{event.eventDate}</p>
                  </div>
                  <div className="items-center flex p-0">
                    <div className="flex-1 grid place-items-center py-2 text-sm font-medium">
                      View
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-row justify-between py-8">
        <div className="max-w-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">About {firstName}</h3>
            <p className="text-gray-500 dark:text-gray-400">{data.bio || defaultBio}</p>
          </div>
          <div className="py-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="flex flex-row text-sm font-medium list-inside list-disc text-gray-500 dark:text-gray-400">
              {data.emailAddress && (
                <div className="flex flex-col gap-2">
                  <div className="text-white text-md">Email</div>
                  <div className="mr-8">{data.emailAddress}</div>
                </div>
              )}
              {data.phone && (
                <div className="flex flex-col gap-2">
                  <div className="text-white text-md">Phone</div>
                  <div>{data.phone}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {false && (
          <div>
            <iframe
              width="560"
              height="315"
              src={data.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
        {data.skills?.length && (
          <div>
            <div className="space-y-2">
              <ul className="grid gap-2 text-sm text-gray-400 font-medium">
                <h3 className="text-xl font-bold">Skills & Expertise</h3>
                {data.skills.map((skill) => {
                  return <li>{skill.name}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
        {reviews?.length > 0 && (
          <div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Testimonials</h3>
              <div className="grid gap-2">
                {reviews.slice(0, 2).map((review, index) => (
                  <blockquote
                    key={index}
                    className="text-sm text-gray-500 leading-6 italic md:text-base lg:text-lg xl:text-xl dark:text-gray-400"
                  >
                    {review.text}
                    <footer className="text-gray-500 italic dark:text-gray-400">
                      — Satisfied HomeBuyer
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const userRef = collection(firestore, 'users');
  const querySnapshot = await getDocs(userRef);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  const paths = data
    .filter((user) => user.userName)
    .map((user) => ({
      params: { username: user.userName.trim() },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  try {
    const userRef = collection(firestore, 'users');
    const q = query(userRef, where('userName', '==', context.params.username));
    const querySnapshot = await getDocs(q);

    const eventRef = collection(firestore, 'events');
    const eventQ = query(eventRef);
    const eventSnapshot = await getDocs(eventQ);
    if (!querySnapshot.empty) {
      // Get the first document from the query snapshot
      const userDocRef = querySnapshot.docs[0];

      const result = JSON.parse(JSON.stringify(userDocRef.data()));
      let eventResult = [];

      if (!eventSnapshot.empty) {
        eventSnapshot.forEach((doc) => {
          const eventData = doc.data();
          if (eventData.createdBy === userDocRef.id) {
            const value = JSON.parse(JSON.stringify(eventData));
            value.id = doc.id;
            eventResult.push(value);
          }
        });
        result.events = eventResult;
      }

      if (result.serviceZipCodes?.length) {
        const zipcodes = result.serviceZipCodes.join(',');

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodes}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
          );
          const data = await response.json();

          if (data?.results?.length) {
            const postcodeLocalities = data.results
              .map((field) => field.postcode_localities || [])
              .flat();

            result.serviceZipCodes = postcodeLocalities;
          }
        } catch (error) {
          console.log('Error getting zip code data', error);
        }
      }
      return {
        props: {
          data: result,
        },
      };
    } else {
      return {
        props: {
          data: {},
        },
      };
    }
  } catch (error) {
    console.log('Error was caused', error);
    return {
      props: {
        data: {},
      },
    };
  }
}

export default ProfilePage;
